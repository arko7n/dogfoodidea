var WildRydes = window.WildRydes || {};
WildRydes.map = WildRydes.map || {};

(function stripeWrapper($) {
    
    // Register click handler for #request button
    $(function onDocReady() {
        $('#checkoutButton').click(createCheckoutSession);
        handleRedirectToMerchant();
    });
    
    function handleRequestClick(event) {
        createCheckoutSession();
    }
    
    function createCheckoutSession() {
        console.log("Hello!");
        $.ajax({
            method: 'POST',
            url: 'https://749ruwi05l.execute-api.us-west-2.amazonaws.com/prod/checkout-sessions',
            data: JSON.stringify({
                orderContext: "Blah blah"
            }),
            contentType: 'application/json',
            success: proceedToStripeCheckout,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
            }
        });
    }
    
    function proceedToStripeCheckout(stripeCheckoutSession) {
        var unicorn;
        var pronoun;
        console.log('Response received from API: ', stripeCheckoutSession);

        // Redirect customer
        window.location = stripeCheckoutSession.url;
    }
    
    function handleRedirectToMerchant() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params);
    }
}(jQuery));