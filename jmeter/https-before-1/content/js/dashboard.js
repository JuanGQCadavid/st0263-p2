/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 6;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.46153846153846156, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.5, 500, 1500, "HTTPS Request-3"], "isController": false}, {"data": [0.5, 500, 1500, "HTTPS Request-11"], "isController": false}, {"data": [0.5, 500, 1500, "HTTPS Request-4"], "isController": false}, {"data": [0.0, 500, 1500, "HTTPS Request-10"], "isController": false}, {"data": [0.0, 500, 1500, "HTTPS Request-5"], "isController": false}, {"data": [0.5, 500, 1500, "HTTPS Request-6"], "isController": false}, {"data": [1.0, 500, 1500, "HTTPS Request-7"], "isController": false}, {"data": [0.0, 500, 1500, "HTTPS Request"], "isController": false}, {"data": [0.0, 500, 1500, "HTTPS Request-8"], "isController": false}, {"data": [0.5, 500, 1500, "HTTPS Request-9"], "isController": false}, {"data": [0.5, 500, 1500, "HTTPS Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "HTTPS Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "HTTPS Request-2"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 13, 0, 0.0, 5441.000000000002, 88, 35367, 27461.799999999996, 35367.0, 35367.0, 0.367563899570233, 905.5988662950972, 0.09233275842569554], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTPS Request-3", 1, 0, 0.0, 857.0, 857, 857, 857.0, 857.0, 857.0, 1.1668611435239205, 293.48608882730457, 0.16522936114352393], "isController": false}, {"data": ["HTTPS Request-11", 1, 0, 0.0, 766.0, 766, 766, 766.0, 766.0, 766.0, 1.3054830287206267, 83.32525905678851, 0.1746593505221932], "isController": false}, {"data": ["HTTPS Request-4", 1, 0, 0.0, 953.0, 953, 953, 953.0, 953.0, 953.0, 1.0493179433368311, 6.6514870802728225, 0.14346143756558238], "isController": false}, {"data": ["HTTPS Request-10", 1, 0, 0.0, 15604.0, 15604, 15604, 15604.0, 15604.0, 15604.0, 0.0640861317610869, 492.1792388970777, 0.008699191713663164], "isController": false}, {"data": ["HTTPS Request-5", 1, 0, 0.0, 1569.0, 1569, 1569, 1569.0, 1569.0, 1569.0, 0.6373486297004461, 355.9536079907584, 0.08838232950924156], "isController": false}, {"data": ["HTTPS Request-6", 1, 0, 0.0, 1048.0, 1048, 1048, 1048.0, 1048.0, 1048.0, 0.9541984732824427, 174.7273452409351, 0.13232049141221375], "isController": false}, {"data": ["HTTPS Request-7", 1, 0, 0.0, 397.0, 397, 397, 397.0, 397.0, 397.0, 2.5188916876574305, 461.2376023299748, 0.3419198677581864], "isController": false}, {"data": ["HTTPS Request", 1, 0, 0.0, 35367.0, 35367, 35367, 35367.0, 35367.0, 35367.0, 0.028274945570729775, 452.8122360268754, 0.04616768456470722], "isController": false}, {"data": ["HTTPS Request-8", 1, 0, 0.0, 12443.0, 12443, 12443, 12443.0, 12443.0, 12443.0, 0.08036647110825364, 563.7277862050953, 0.01114456923571486], "isController": false}, {"data": ["HTTPS Request-9", 1, 0, 0.0, 519.0, 519, 519, 519.0, 519.0, 519.0, 1.9267822736030829, 117.30416064547205, 0.2634272639691715], "isController": false}, {"data": ["HTTPS Request-0", 1, 0, 0.0, 1030.0, 1030, 1030, 1030.0, 1030.0, 1030.0, 0.970873786407767, 0.9869918082524272, 0.1194629854368932], "isController": false}, {"data": ["HTTPS Request-1", 1, 0, 0.0, 88.0, 88, 88, 88.0, 88.0, 88.0, 11.363636363636363, 62.96608664772727, 1.5203302556818183], "isController": false}, {"data": ["HTTPS Request-2", 1, 0, 0.0, 92.0, 92, 92, 92.0, 92.0, 92.0, 10.869565217391305, 68.93257472826087, 1.5179177989130435], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 13, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
