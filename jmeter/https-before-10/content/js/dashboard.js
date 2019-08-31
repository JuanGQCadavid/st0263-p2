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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.2423076923076923, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.05, 500, 1500, "HTTPS Request-3"], "isController": false}, {"data": [0.15, 500, 1500, "HTTPS Request-11"], "isController": false}, {"data": [0.45, 500, 1500, "HTTPS Request-4"], "isController": false}, {"data": [0.0, 500, 1500, "HTTPS Request-10"], "isController": false}, {"data": [0.05, 500, 1500, "HTTPS Request-5"], "isController": false}, {"data": [0.05, 500, 1500, "HTTPS Request-6"], "isController": false}, {"data": [0.05, 500, 1500, "HTTPS Request-7"], "isController": false}, {"data": [0.0, 500, 1500, "HTTPS Request"], "isController": false}, {"data": [0.0, 500, 1500, "HTTPS Request-8"], "isController": false}, {"data": [0.3, 500, 1500, "HTTPS Request-9"], "isController": false}, {"data": [0.25, 500, 1500, "HTTPS Request-0"], "isController": false}, {"data": [0.95, 500, 1500, "HTTPS Request-1"], "isController": false}, {"data": [0.85, 500, 1500, "HTTPS Request-2"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 130, 0, 0.0, 33153.938461538455, 85, 257170, 134777.7, 207362.44999999972, 256199.38999999998, 0.4979106901425173, 1226.7454911553825, 0.12507612288435832], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTPS Request-3", 10, 0, 0.0, 4691.700000000001, 801, 7760, 7650.0, 7760.0, 7760.0, 0.668985817500669, 168.2616926177415, 0.09472943704843458], "isController": false}, {"data": ["HTTPS Request-11", 10, 0, 0.0, 2567.9000000000005, 621, 5381, 5237.3, 5381.0, 5381.0, 0.08203243562504614, 5.235896445329483, 0.010975042656866524], "isController": false}, {"data": ["HTTPS Request-4", 10, 0, 0.0, 1184.8000000000002, 123, 3008, 2913.4000000000005, 3008.0, 3008.0, 0.6496037417175523, 4.117751843250617, 0.0888130115629466], "isController": false}, {"data": ["HTTPS Request-10", 10, 0, 0.0, 99462.3, 45501, 148182, 146845.1, 148182.0, 148182.0, 0.059144300263783575, 454.2261467340517, 0.00802837669596281], "isController": false}, {"data": ["HTTPS Request-5", 10, 0, 0.0, 8690.899999999998, 1050, 15639, 15420.0, 15639.0, 15639.0, 0.33910949845705174, 189.38967443368713, 0.04702494998134898], "isController": false}, {"data": ["HTTPS Request-6", 10, 0, 0.0, 4460.2, 1058, 6551, 6525.3, 6551.0, 6551.0, 0.31347962382445144, 57.402588655956116, 0.04347080721003135], "isController": false}, {"data": ["HTTPS Request-7", 10, 0, 0.0, 4993.6, 739, 15459, 14710.600000000002, 15459.0, 15459.0, 0.28283742504808235, 51.7907365440095, 0.03839297078289399], "isController": false}, {"data": ["HTTPS Request", 10, 0, 0.0, 215510.49999999997, 135656, 257170, 256856.9, 257170.0, 257170.0, 0.038300822318655184, 613.3727455776913, 0.06253806144217916], "isController": false}, {"data": ["HTTPS Request-8", 10, 0, 0.0, 85977.2, 58138, 154724, 149403.40000000002, 154724.0, 154724.0, 0.05639935253543289, 395.6112755700565, 0.007821003964874484], "isController": false}, {"data": ["HTTPS Request-9", 10, 0, 0.0, 1415.6000000000001, 926, 2568, 2534.1000000000004, 2568.0, 2568.0, 0.10360869069697566, 6.307786128350446, 0.014165250681227141], "isController": false}, {"data": ["HTTPS Request-0", 10, 0, 0.0, 1341.7, 452, 2436, 2388.6000000000004, 2436.0, 2436.0, 0.9268699601445918, 0.9422574497173047, 0.11404845212716656], "isController": false}, {"data": ["HTTPS Request-1", 10, 0, 0.0, 300.2, 96, 1102, 1036.5000000000002, 1102.0, 1102.0, 1.1883541295306002, 6.58468879976233, 0.15898878490790258], "isController": false}, {"data": ["HTTPS Request-2", 10, 0, 0.0, 404.59999999999997, 85, 1984, 1860.3000000000004, 1984.0, 1984.0, 1.183151916706105, 7.503309128017038, 0.1652253164931377], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 130, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
