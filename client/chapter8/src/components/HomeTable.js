import React from 'react';
import { Link } from 'react-router-dom';

const HomeTable = (props) => {

    console.log(props);

    const Rows = props.players.map(player => {
        return (
            <tr>
                <td>
                    {player.username}
                </td>
                <td>
                    {player.email}
                </td>
                <td>
                    {player.experience}
                </td>
                <td>
                    {player.lvl}
                </td>
                {props.editable ? (
                    <td>
                        <Link to="/edit">
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                    </td>
                ) : null}
            </tr>
        );

    }
    )


    return (
        <div className="card">
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Username
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Experience
                            </th>
                            <th>
                                Level
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Rows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomeTable;