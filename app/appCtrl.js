angular.module('tickets')
    .controller('appCtrl', [function() {
        var xPathMap = {
            // pnr: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[1]'],
            // trainNo: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[2]'],
            // quota: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[3]'],
            // class: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[2]/td[3]'],
            fare: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[1]/td[2]/span'],
            fareInWords: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[1]/td[3]/span'],
            // totalFare: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[4]/td[2]/span'],
            // totalFareInWords: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[4]/td[3]/span'],
            passengerList: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[15]/td/table/tbody']
        };
        this.getPnr = function () {
            // let prn = document.evaluate('//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[1]/text()[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var xPathValue = {};
            var xPathNode = {};
            for(item in xPathMap) {
                xPathNode[item] = getValueFromXPath(xPathMap[item]);
                xPathValue[item] = xPathNode[item].innerHTML;
            }
            console.log(xPathNode);
            console.log(xPathValue);
        }
        this.printTicket= function() {
            window.print();
        }


        function getValueFromXPath(xpath) {
            let el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            return el;
        }
    }]);