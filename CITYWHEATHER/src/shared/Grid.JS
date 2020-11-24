'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';
import CustomLoadingCellRenderer from './customLoadingCellRenderer.jsx';

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: AllModules,
      columnDefs: [
        { field: 'id' },
        {
          field: 'athlete',
          width: 150,
        },
        { field: 'age' },
        { field: 'country' },
        { field: 'year' },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
      ],
      defaultColDef: {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true,
      },
      frameworkComponents: {
        customLoadingCellRenderer: CustomLoadingCellRenderer,
      },
      loadingCellRenderer: 'customLoadingCellRenderer',
      loadingCellRendererParams: { loadingMessage: 'One moment please...' },
      rowModelType: 'serverSide',
      cacheBlockSize: 100,
      maxBlocksInCache: 10,
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      var idSequence = 0;
      data.forEach(function(item) {
        item.id = idSequence++;
      });
      var server = new FakeServer(data);
      var datasource = new ServerSideDatasource(server);
      params.api.setServerSideDatasource(datasource);
    };

    httpRequest.open(
      'GET',
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          style={{
            height: '100%',
            paddingTop: '25px',
            boxSizing: 'border-box',
          }}
        >
          <div
            id="myGrid"
            style={{
              height: '100%',
              width: '100%',
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              modules={this.state.modules}
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              frameworkComponents={this.state.frameworkComponents}
              loadingCellRenderer={this.state.loadingCellRenderer}
              loadingCellRendererParams={this.state.loadingCellRendererParams}
              rowModelType={this.state.rowModelType}
              cacheBlockSize={this.state.cacheBlockSize}
              maxBlocksInCache={this.state.maxBlocksInCache}
              animateRows={true}
              debug={true}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

function ServerSideDatasource(server) {
  return {
    getRows: function(params) {
      setTimeout(function() {
        var response = server.getResponse(params.request);
        if (response.success) {
          params.successCallback(response.rows, response.lastRow);
        } else {
          params.failCallback();
        }
      }, 2000);
    },
  };
}
function FakeServer(allData) {
  return {
    getResponse: function(request) {
      console.log(
        'asking for rows: ' + request.startRow + ' to ' + request.endRow
      );
      var rowsThisPage = allData.slice(request.startRow, request.endRow);
      var lastRow = allData.length <= request.endRow ? data.length : -1;
      return {
        success: true,
        rows: rowsThisPage,
        lastRow: lastRow,
      };
    },
  };
}

render(<GridExample></GridExample>, document.querySelector('#root'));
