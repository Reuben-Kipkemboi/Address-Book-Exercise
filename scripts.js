function contactName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = [];

}

function personAddress(country, city, zipCode) {
    this.country = country;
    this.city = city;
    this.zipCode = zipCode;
}
contactName.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}
personAddress.prototype.fullAddress = function () {
    return this.country + " - " + this.city + " - " + this.zipCode
}

function resetFields() {
    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#countryName").val("");
    $("input#city").val("");
    $("input#zipcode").val("");
}
$(document).ready(function () {
    $("form#userForm").submit(function (event) {
        event.preventDefault();
        let inputtedFirstName = $("input#firstName").val();
        let inputtedLastName = $("input#lastName").val();
        let newContact = new contactName(inputtedFirstName, inputtedLastName);

        $(".address").each(function () {
            var inputtedCountry = $(this).find("input#countryName").val();
            var inputtedCity = $(this).find("input#cityName").val();
            var inputtedZipCode = $(this).find("input#zipcode").val();
            var newAddress = new personAddress(inputtedCountry, inputtedCity, inputtedZipCode)
            newContact.address.push(newAddress)
        });

        $("ul#mycontacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $("ul#address").text("");
            newContact.addresses.forEach(function(address) {
              $("ul#address").append("<li>" + address.fullAddress() + "</li>");
            });
          });

          resetFields();

    })

})
