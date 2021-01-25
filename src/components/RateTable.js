import { useSelector } from "react-redux";
import { getName } from "../store/user";

export function RateTable({ currencyData, amount }) {
  const name = useSelector(getName);

  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.values(currencyData).map(({ code, rate }) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
          <tr><td colSPan={2}>Prepared for {name}</td></tr>
      </tfoot>
    </table>
  );
}
