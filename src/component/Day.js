import dummy from "../db/data.json";

export default function Day() {
    return (
        <div>
            <table>
                <tbody>
                    {words.map(word => (
                        <tr>
                            <td></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );

}