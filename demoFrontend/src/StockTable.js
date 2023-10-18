import { useEffect } from "react";

const StockTable = ({SelectedId}) => {

  return (
    <>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{SelectedId.stockName}</td>
              <td>{SelectedId.Price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default StockTable;
