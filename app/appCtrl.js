angular.module('tickets')
    .controller('appCtrl', ['$timeout', function($timeout) {
        this.xPathMap = {
            pnr: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[1]'],
            trainNo: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[2]'],
            quota: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[3]'],
            class: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[2]/td[3]'],
            fare: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[1]/td[2]/span'],
            fareInWords: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[1]/td[3]/span'],
            totalFare: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[4]/td[2]/span'],
            totalFareInWords: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[4]/td[3]/span'],
            serviceCharge: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[2]/td[2]/span'],
            serviceChargeInWords: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr[2]/td[3]/span'],
            passengerList: ['//*[@id="abcwatermark"]/tbody/tr/td/table/tbody/tr[15]/td/table/tbody']
        };
        this.activate = function () {
            var xPathMap = this.xPathMap;
            for(var item in xPathMap) {
                xPathMap[item].push(getValueFromXPath(xPathMap[item][0]));
                xPathMap[item].push(xPathMap[item][1].innerHTML);
            }
            this.ticketDetails = xPathMap;
        };
        this.printTicket = function() {
            window.print();
        };

        this.updateTicket = function() {
            var xPathMap = this.xPathMap;
            for(var item in xPathMap) {
                xPathMap[item][1].innerHTML = xPathMap[item][2]
            }
        };


        function getValueFromXPath(xpath) {
            let el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            return el;
        }
        $timeout(this.activate.bind(this), 500);

    }]);