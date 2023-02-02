console.log("Hello 🌎");
 var _boxeverq = _boxeverq || [],
        _boxever_settings = {
            client_key: "psfu6uh05hsr9c34rptlr06dn864cqrx",
            target: "https://api.boxever.com/v1.2",
            cookie_domain: "testfs",
            pointOfSale: "TestFS",
            web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net"
        };
! function() {
    var e = document.createElement("script");
    e.type = "text/javascript", e.async = !0, e.src = "https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.8.min.js";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}()

// Place an anonymous function in the Boxever queue 
_boxeverq.push(function() { 
    var searchEvent = {
        "browser_id": Boxever.getID(),
        "channel": "WEB",
        "type": "SEARCH",
        "language": "EN",
        "currency": "EUR",
        "page": "/home",
        "pos": "TestFS",
        "product_name": "DUB-LHR",
        "product_type": "DUB-LHR|Economy|Flex"
    };
    // Invoke event create 
    // (<event msg>, <callback function>, <format>)
    Boxever.eventCreate(searchEvent, function(data){}, 'json');
});

/*

// Place an anonymous function in the Boxever queue 
_boxeverq.push(function() { 
    var searchEvent = {
    "channel": "WEB",
    "type": "IDENTITY",
    "language": "EN",
    "currency": "EUR",
    "page": "home page",
    "pos": "TestFS",
    "browser_id": Boxever.getID(),
    "email": "arun.test@test.com",
    "title": "Mr",
    "firstname": "Arun",
    "lastname": "Test",
    "gender": "male",
    "dob": "1980-01-23T00:00",
    "passport_no": "IR123456",
    "mobile": "+3531234567",
    "phone": "+353123456",
    "street": ["Delhi", "New Delhi"],
    "city": "Delhi",
    "country": "IN",
    "postal_code": "110051",
    "identifiers": [{
        "provider": "BXLP",
        "id": "123456"
    }]
    };
    // (<event msg>, <callback function>, <format>)
    Boxever.eventCreate(searchEvent, function(data){}, 'json');
});
*/