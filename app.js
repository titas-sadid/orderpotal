/* =====================================================
   IMRAN CUSTOMER MANAGEMENT
   JAVASCRIPT
===================================================== */


/* =====================================================
   LOGIN PROTECTION
   Dashboard খুলতে Login করা থাকতে হবে
===================================================== */

if (
    localStorage.getItem("imranLoggedIn") !== "true"
) {

    window.location.href = "login.html";

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (!confirmLogout) {
        return;
    }


    localStorage.removeItem("imranLoggedIn");
    localStorage.removeItem("imranUsername");
    localStorage.removeItem("imranRemember");


    window.location.href = "login.html";

}


/* =====================================================
   MAKE LOGOUT AVAILABLE FROM HTML
   onclick="logout()" হলেও কাজ করবে
===================================================== */

window.logout = logout;



/* =====================================================
   PAGE NAVIGATION
===================================================== */

const menuItems =
    document.querySelectorAll(".menu-item");

const pages =
    document.querySelectorAll(".page");


menuItems.forEach(function(item){

    item.addEventListener("click", function(e){

        e.preventDefault();

        const pageName =
            item.getAttribute("data-page");

        showPage(pageName);

    });

});


function showPage(pageName){

    /* Remove active menu */

    menuItems.forEach(function(item){

        item.classList.remove("active");

    });


    /* Add active menu */

    const activeMenu =
        document.querySelector(
            `.menu-item[data-page="${pageName}"]`
        );


    if(activeMenu){

        activeMenu.classList.add("active");

    }


    /* Hide all pages */

    pages.forEach(function(page){

        page.classList.remove("active-page");

    });


    /* Show selected page */

    const selectedPage =
        document.getElementById(pageName);


    if(selectedPage){

        selectedPage.classList.add("active-page");

    }


    /* Close mobile sidebar */

    const sidebarElement =
        document.getElementById("sidebar");


    if(sidebarElement){

        sidebarElement.classList.remove("open");

    }

}


/* =====================================================
   VIEW ALL BUTTON
===================================================== */

const pageLinks =
    document.querySelectorAll("[data-page-link]");


pageLinks.forEach(function(button){

    button.addEventListener("click", function(){

        const page =
            button.getAttribute("data-page-link");

        showPage(page);

    });

});


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");


const sidebar =
    document.getElementById("sidebar");


if(mobileMenu && sidebar){

    mobileMenu.addEventListener("click", function(){

        sidebar.classList.toggle("open");

    });

}


/* =====================================================
   CREATE ORDER MODAL
===================================================== */

const orderModal =
    document.getElementById("orderModal");


const createOrderBtn =
    document.getElementById("createOrderBtn");


const ordersCreateBtn =
    document.getElementById("ordersCreateBtn");


const closeOrderModal =
    document.getElementById("closeOrderModal");


const cancelOrder =
    document.getElementById("cancelOrder");


function openOrderModal(){

    if(orderModal){

        orderModal.classList.add("show");

    }

}


function closeModal(){

    if(orderModal){

        orderModal.classList.remove("show");

    }

}


if(createOrderBtn){

    createOrderBtn.addEventListener(
        "click",
        openOrderModal
    );

}


if(ordersCreateBtn){

    ordersCreateBtn.addEventListener(
        "click",
        openOrderModal
    );

}


if(closeOrderModal){

    closeOrderModal.addEventListener(
        "click",
        closeModal
    );

}


if(cancelOrder){

    cancelOrder.addEventListener(
        "click",
        closeModal
    );

}


/* Close modal by clicking outside */

if(orderModal){

    orderModal.addEventListener(
        "click",
        function(e){

            if(e.target === orderModal){

                closeModal();

            }

        }
    );

}


/* =====================================================
   CREATE ORDER FORM
===================================================== */

const orderForm =
    document.getElementById("orderForm");


if(orderForm){

    orderForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();


            const customerName =
                document.getElementById(
                    "customerName"
                );


            if(!customerName){

                return;

            }


            const customerNameValue =
                customerName.value.trim();


            if(customerNameValue === ""){

                alert(
                    "Please enter customer name."
                );

                return;

            }


            alert(
                "Order created successfully for "
                + customerNameValue
                + "!"
            );


            orderForm.reset();

            closeModal();

        }
    );

}


/* =====================================================
   GLOBAL SEARCH
===================================================== */

const globalSearch =
    document.getElementById("globalSearch");


if(globalSearch){

    globalSearch.addEventListener(
        "input",
        function(){

            const search =
                globalSearch.value
                .toLowerCase()
                .trim();


            /* Search dashboard orders */

            const dashboardRows =
                document.querySelectorAll(
                    "#dashboardOrders tr"
                );


            dashboardRows.forEach(function(row){

                const text =
                    row.innerText.toLowerCase();


                if(text.includes(search)){

                    row.style.display = "";

                }else{

                    row.style.display = "none";

                }

            });


            /* Search all orders */

            const orderRows =
                document.querySelectorAll(
                    "#ordersTable tr"
                );


            orderRows.forEach(function(row){

                const text =
                    row.innerText.toLowerCase();


                if(text.includes(search)){

                    row.style.display = "";

                }else{

                    row.style.display = "none";

                }

            });

        }
    );

}


/* =====================================================
   ORDER TABS
===================================================== */

const tabs =
    document.querySelectorAll(".tab");


tabs.forEach(function(tab){

    tab.addEventListener(
        "click",
        function(){

            tabs.forEach(function(t){

                t.classList.remove("active");

            });


            tab.classList.add("active");


            const selectedStatus =
                tab.innerText
                .toLowerCase();


            const rows =
                document.querySelectorAll(
                    "#ordersTable tr"
                );


            rows.forEach(function(row){

                if(selectedStatus === "all orders"){

                    row.style.display = "";

                    return;

                }


                const rowText =
                    row.innerText.toLowerCase();


                if(rowText.includes(selectedStatus)){

                    row.style.display = "";

                }else{

                    row.style.display = "none";

                }

            });

        }
    );

});


/* =====================================================
   CHART FILTER
===================================================== */

const chartFilter =
    document.getElementById("chartFilter");


if(chartFilter){

    chartFilter.addEventListener(
        "change",
        function(){

            console.log(
                "Chart filter changed to:",
                chartFilter.value
            );

        }
    );

}


/* =====================================================
   ADD CUSTOMER
===================================================== */

const addCustomerBtn =
    document.getElementById(
        "addCustomerBtn"
    );


if(addCustomerBtn){

    addCustomerBtn.addEventListener(
        "click",
        function(){

            alert(
                "Customer creation form will be connected here."
            );

        }
    );

}


/* =====================================================
   ADD PRODUCT
===================================================== */

const addProductBtn =
    document.getElementById(
        "addProductBtn"
    );


if(addProductBtn){

    addProductBtn.addEventListener(
        "click",
        function(){

            alert(
                "Product creation form will be connected here."
            );

        }
    );

}


/* =====================================================
   NOTIFICATION
===================================================== */

const notificationBtn =
    document.querySelector(
        ".notification-btn"
    );


if(notificationBtn){

    notificationBtn.addEventListener(
        "click",
        function(){

            alert(
                "You have 5 new notifications."
            );

        }
    );

}


/* =====================================================
   ACTION BUTTONS
===================================================== */

const actionButtons =
    document.querySelectorAll(
        ".action-btn"
    );


actionButtons.forEach(function(button){

    button.addEventListener(
        "click",
        function(){

            alert(
                "Order action menu will appear here."
            );

        }
    );

});


/* =====================================================
   SETTINGS SAVE
===================================================== */

const settingsButton =
    document.querySelector(
        "#settings .primary-btn"
    );


if(settingsButton){

    settingsButton.addEventListener(
        "click",
        function(){

            alert(
                "Settings saved successfully!"
            );

        }
    );

}


/* =====================================================
   ESC KEY CLOSE MODAL
===================================================== */

document.addEventListener(
    "keydown",
    function(e){

        if(e.key === "Escape"){

            closeModal();

        }

    }
);


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        console.log(
            "IMRAN CUSTOMER MANAGEMENT loaded successfully."
        );


        /* Show logged-in username if element exists */

        const username =
            localStorage.getItem(
                "imranUsername"
            );


        const usernameElements =
            document.querySelectorAll(
                ".username, .user-name, #loggedUsername"
            );


        usernameElements.forEach(
            function(element){

                if(username){

                    element.textContent =
                        username;

                }

            }
        );

    }
);
