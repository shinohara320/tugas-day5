function getData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if(name == ""){
        alert("Please enter your name");
        return;
    }else if(email == ""){
        alert("Please enter your email");
        return;
    }else if(phone == ""){
        alert("Please enter your phone");
        return;
    }
    else if(subject == ""){
        alert("Please enter your subject");
        return;
    }
    else if(message == ""){
        alert("Please enter your message");
        return;
    }

    const emailReceiver = "daudmanuwu@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo Nama saya ${name}, ${message}. untuk membahas perihal ${subject} lebih lanjut bisakah anda menghubungi saya di ${phone}`;
    a.click();

    let data = {
        name,
        email,
        phone,
        subject,
        message
    }
    console.log(data);
}