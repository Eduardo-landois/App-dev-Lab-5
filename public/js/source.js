$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************


    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);
    $("#notification-num").text(notifAmt);

    $.each(customers, function (i, c) {
        const $status = $("<span>")
            .addClass("status status-" + c.status.toLowerCase())  
            .text(c.status);
        const $row = $("<tr>");
        $row.append($("<td>").text(c.name));
        $row.append($("<td>").text(c.email));
        $row.append($("<td>").append($status));
        $row.append($("<td>").text(c.joined));
        $("#customerTableBody").append($row);
    });


    $.each(sales,function (i, sale) {
        const $row = $("<tr>");
        $row.append($("<td>").text(sale.product));
        $row.append($("<td>").text(sale.quantity));
        $row.append($("<td>").text(sale.revenue));
        $("#salesTableBody").append($row);
    });
       
    function loadList(selector, items, key) {
        $.each(items, function (i, item) {
            $(selector).append($("<li>").text(item[key]));
        });
    }

    loadList("#activity-list", activities, "message");
    loadList("#system-status-list", messages, "messsage");    
    loadList("#notifications-list", notifications, "messsage");
    loadList("#tasks-list", tasks, "messsage");

    $("button").button();

    $("#dashboardTabs").tabs();

    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
            var name = $("#customerName").val();
            var email = $("#customerEmail").val();
            if (!name || !email) {
                 alert(
                 "Please enter a name and email."
                    );
                return;
                }
                 alert("Customer created: " + name);
                 $(this).dialog("close");
                },
                  "Cancel": function () {
                         $(this).dialog("close");
                    }
                 } 
      } );

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content" 
    });

    $("#newCustomerButton").on("click", function () {
        $("#customerDialog").dialog("open");
    });

    $("#customerDate").datepicker();

    });