import { formatter } from "../util/investment"

export default function ResultTable({ resultTableValues }) {
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Investment Value</th>
                    <th scope="col">Interest (Year)</th>
                    <th scope="col">Total Interest</th>
                    <th scope="col">Invested Captial</th>
                </tr>
            </thead>
            <tbody>
            {
                resultTableValues.map((row, rowNumber) => (
                    <tr>
                        <td>{rowNumber + 1}</td>
                        <td>{formatter.format(row['annualInvestment'])}</td>
                        <td>{formatter.format(row['interest'])}</td>
                        <td>{formatter.format(row['valueEndOfYear'])}</td>
                        <td>{formatter.format(row['annualInvestment'] * (rowNumber + 1))}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}