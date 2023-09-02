const pass = document.getElementById("password");
const confirmPass = document.getElementById("password-confirmation");
const subm = document.querySelector("button");
const passNoMatch = document.getElementById("pass-no-match");

subm.addEventListener("click", (event) => 
{
    if(pass.value.length < 8) return;

    if(confirmPass.value.length != pass.value.length)
    {
        PasswordValidUI(false);
        return;
    }

    PasswordValidUI(CompareString(pass.value,confirmPass.value));
});

function CompareString(stringA, stringB)
{
    return stringA === stringB;
}

function PasswordValidUI(pIsValid)
{
    if(pIsValid)
    {
        passNoMatch.classList.add("hide");
        pass.classList.remove("error");
        confirmPass.classList.remove("error");
        return;
    }

    passNoMatch.classList.remove("hide");
    pass.classList.add("error");
    confirmPass.classList.add("error");
}