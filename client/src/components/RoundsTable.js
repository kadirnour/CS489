import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RoundsTable(props){

  const renderTable = () => {
    const table = [];
    for (let r = 0; r < props.rounds.length; ++r) {
      table.push(
        <tr key={r}>
          <td><button id="roundPicBtn" type="button" 
                className="navbar-btn navbar-profile-btn"
                style={{backgroundImage: props.rounds[r].imageUrl === "" ? 
                            `url(./images/sslogo.png)` : 
                            `url(${props.rounds[r].imageUrl})`}}
                >
            </button></td>
          <td>{props.rounds[r].date.substring(0,10)}</td>
          <td>{props.rounds[r].course}</td>
          <td>{(Number(props.rounds[r].strokes) + 
              Number(props.rounds[r].minutes)) +
              ":" + (props.rounds[r].seconds < 10 ?  
                "0" + props.rounds[r].seconds :
                props.rounds[r].seconds) + " (" + 
              props.rounds[r].strokes + 
              " in " + props.rounds[r].minutes + ":" + 
              (props.rounds[r].seconds < 10 ?  
                "0" + props.rounds[r].seconds :
                props.rounds[r].seconds) + ")"}
          </td>
          <td><button id="editButton" onClick={props.menuOpen ? null : () => 
                  props.initiateEditRound(r)}>
                <FontAwesomeIcon icon="eye"/> 
                <FontAwesomeIcon icon="edit"/> 
              </button></td>
          <td><button onClick={props.menuOpen ? null : 
            () => props.initiateDeleteRound(r)}>
                <FontAwesomeIcon icon="trash"/>
              </button></td>
        </tr> 
      );
    }
    return table;
  }

  return(
    <div id="roundsModeTab" className="mode-page" role="tabpanel"
        aria-label="Rounds Tab" tabIndex="0">
    <h1 className="mode-page-header">Rounds</h1>
    <table id="roundsTable" className="table table-hover caption-top">
      <caption id="roundsTableCaption" aria-live="polite">
        {"Table displaying " + props.rounds.length  + " speedgolf round" + 
          (props.rounds.length !== 1 ? "s" : "")}
      </caption>
      <thead className="table-light">
        <tr>
        <th scope="col" role="columnheader" 
            className="sortable-header cell-align-middle" 
            aria-sort="none">
            <button className="btn bg-transparent table-sort-btn" 
                    aria-label="Sort ascending by date">
              <FontAwesomeIcon icon="sort" /> 
            </button>Date
        </th>
        <th scope="col" role="columnheader" 
            className="sortable-header cell-align-middle" 
            aria-sort="none">
            <button className="btn bg-transparent table-sort-btn" 
                    aria-label="Sort ascending by course">
              <FontAwesomeIcon icon="sort" /> 
            </button>Course
        </th>
        <th scope="col" role="columnheader"
            className="sortable-header cell-align-middle"
            aria-sort="none">
            <button className="btn bg-transparent table-sort-btn" 
                    aria-label="Sort ascending by score">
              <FontAwesomeIcon icon="sort" />
            </button>Score
        </th>
        <th scope="col" className="cell-align-middle">
          View/Edit...
        </th>
        <th scope="col" className="cell-align-middle">
          Delete
        </th>
        </tr>
      </thead>
      <tbody>
        {props.rounds === null || props.rounds.length === 0 ? 
          <tr>
            <td colSpan="5" scope="rowgroup"><i>No rounds logged</i></td>
          </tr> : renderTable()
        }
      </tbody>
    </table>        
  </div>
  );
};

export default RoundsTable;