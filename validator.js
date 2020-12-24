export var Validator;
(function (Validator) {
    function isEmail(str) {
        let regex = /^[\w-\.]+\@\w+\.\w+/i;
        if (str.match(regex)) {
            return true;
        }
        else {
            return false;
        }
    }
    function isDate(str) {
        let regex = /[0-9][0-9][-. ][0-9][0-9][-. ][0-9][0-9][0-9][0-9]/;
        if (str.match(regex)) {
            return true;
        }
        else {
            return false;
        }
    }
    function isPhone(str) {
        let regex = /^(\+995[- ]?)?5[0-9]{2}[- ]?[0-9]{2}[- ]?[0-9][- ]?[0-9][- ]?[0-9]{2}/;
        if (str.match(regex)) {
            return true;
        }
        else {
            return false;
        }
    }
    function isEmails(arr) {
        if (Array.isArray(arr)) {
            let counter = 0;
            for (let item of arr) {
                if (item["primary"] === true) {
                    counter++;
                }
                if (!isEmail(item["email"])) {
                    return false;
                }
            }
            if (counter !== 1) {
                return false;
            }
        }
        return true;
    }
    function isString(str) {
        if (typeof str === "string") {
            return true;
        }
        else {
            return false;
        }
    }
    function isPhones(arr) {
        if (Array.isArray(arr)) {
            let counter = 0;
            for (let item of arr) {
                if (item["primary"] === true) {
                    counter++;
                }
                if (!isPhone(item["phone"])) {
                    return false;
                }
            }
            if (counter !== 1) {
                return false;
            }
        }
        return true;
    }
    function isSubject(arr) {
        if (Array.isArray(arr)) {
            for (let item of arr) {
                if (!isString(item["subject"])) {
                    return false;
                }
            }
        }
        return true;
    }
    function isSex(str) {
        if (!isString(str)) {
            throw new Error("Error: Sex type should be a string");
        }
        if (str !== "female" && str !== "male") {
            throw new Error("Error: Sex should be either female of male");
        }
    }
    function verify(data) {
        let teacher = ['name', 'image', 'dateOfBirth', 'emails', 'phones', 'sex', 'subjects'];
        for (const [key, value] of Object.entries(data)) {
            if (!value) {
                throw new Error(`Error: ${key} is required`);
            }
            else if (key === "name") {
                for (const [k, v] of Object.entries(data[key])) {
                    if (!isString(v) || Object.entries(data[key]).length !== 2) {
                        throw new Error(`Error: name should have two properties: first, last. Type should be a string.`);
                    }
                }
            }
            else if (key === "image" && !isString(value)) {
                throw new Error("image type should be a string");
            }
            else if (key === "dateOfBirth" && (isString(value) === false || isDate(value) === false)) {
                throw new Error("dateOfBirth type should be a string and of correct format.");
            }
            else if (key === "emails" && !isEmails(value)) {
                throw new Error("emails array should have only one primary email and all emails should have a correct format.");
            }
            else if (key === "phones" && !isPhones(value)) {
                throw new Error("phones array should have only one primary phone and all phones should have a correct format.");
            }
            else if (key === "sex") {
                isSex(value);
            }
            else if (key === "subjects" && !isSubject(value)) {
                throw new Error("Error: Subject type should be a string.");
            }
            else if (key === "description" && !isString(value)) {
                throw new Error("Error: Description type should be a string.");
            }
        }
    }
    Validator.verify = verify;
})(Validator || (Validator = {}));
