const Contact = () => {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold p-4 m-4">CONTACT US</h1>
      <form className=" m-4">
        <label>First Name</label>
        <input type="text" className="border-4 " name="text" />
        <label>Last Name</label>
        <input type="text" className="border-4 " name="text" />
        <br></br>
        <label>Description</label>
        <textarea className="border-4"></textarea>
        <br></br>
        <button className="bg-stone-700 text-stone-100">Contact us</button>
      </form>
    </div>
  );
};

export default Contact;
