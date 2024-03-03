import "../App.css";

export default function Login() {
  const nameoutput = document.getElementById("user");
  function setName() {
    let input = document.getElementById("nameInput").value;
    localStorage.setItem("name", input);
  }

  return (
    <div className="w-full flex justify-center items-center bg-blue-500 p-6 rounded-lg">
      <div className="flex flex-col items-center justify-center w-full max-w-sm flex items-center bg-blue-500 p-6 rounded-lg">
        <h1 className="font-bold text-2xl m-2 text-white-600">Login</h1>
        <label for="user">Name:</label>
        <input type="text" id="user" name="user"></input>
        <label for="pass">Password:</label>
        <input type="text" id="pass" name="pass"></input>
        <button
          id="continue"
          className="p-2 bg-blue-400 rounded-lg mt-4"
          onClick={() => {
            setName();
            window.location.href = "/";
          }}
        ></button>
      </div>
    </div>
  );
}
