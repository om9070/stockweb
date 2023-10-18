import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import io from "socket.io-client";
import StockTable from "./StockTable";

const { api } = require("./api");

const Home = () => {
  const [dropDownData, setdropDownData] = useState([]);
  const [stockId, setStockId] = useState("");
  const [updateData, setUpdateData] = useState({});

  const getStockData = async () => {
    try {
      const getAllStock = await fetch(`${api}api/stocks`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const resData = await getAllStock.json();
      if (resData.status) {
        console.log(resData);
        toast.success(resData.message);
        setdropDownData([...resData.data]);
      } else {
        toast.error("something went wrongs");
      }
    } catch (e) {
      toast.error("something went wrongs");
      console.log(e);
    }
  };

//intial event click
  useEffect(() => {
    getStockData();
  }, []);


  //render when diffrent stockId.
  useEffect(() => {
    const socket = io("http://localhost:5000"); // Replace with your server's URL

    const findCurrentStock = dropDownData.find((e) => e._id == stockId);
    setUpdateData({ ...findCurrentStock });


    // Function to send an event to the server
    const sendEventToServer = () => {
      // Emit an event to the server
      socket.emit("updateStockPrice", { ID: stockId });
    };

    // Call the function to trigger the event when the component mounts
    const interval = setInterval(sendEventToServer, 60000);

    socket.on("stockPriceUpdated", (data) => {
      console.log("Received server response:", data);
      setUpdateData({ ...data.response });
    });

    return () => {
      socket.disconnect();
    };
  }, [stockId]);

  return (
    <>
      <Navbar />
      <Dropdown dropDown={dropDownData} GetStockId={setStockId} />
      <StockTable SelectedId={updateData} />
    </>
  );
};
export default Home;
