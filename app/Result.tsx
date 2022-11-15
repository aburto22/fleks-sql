import { TQuery } from "../types";

type ResultProps = {
  result: TQuery;
};

export default function Result({ result }: ResultProps) {
  const headers = Object.keys(result[0]);
  return (
    <div className="max-w-full overflow-auto">
      <table className="mx-auto">
        <thead>
          <tr className="border-b border-fleks-dark">
            {headers.map((h) => (
              <th className="p-2 text-center" key={h}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.map((row, index) => {
            const rowData = Object.values(row).map((val) => {
              if (typeof val === "bigint") {
                return Number(val);
              }

              if (!val) {
                return "Null";
              }

              if (val instanceof Date) {
                return val.toISOString();
              }

              return val;
            });

            return (
              <tr key={index}>
                {rowData.map((val, index) => (
                  <td className="px-2 py-1 text-center" key={index}>
                    {typeof val === "bigint" ? Number(val) : val}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
