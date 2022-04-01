

export default function CheckoutItem() {
  return (
    <div className="pt-20">
      <div className="flex items-center justify-center relative  bg-black bg-opacity-70 h-[30vh]">
        <img
          src={require("../images/checkout.jpg")}
          className="h-full w-full absolute object-cover opacity-80 -z-10 "
        />
        <h1 className="text-6xl text-white font-semibold tracking-wide">
          Checkout
        </h1>
      </div>
      <div className="my-10 flex items-center justify-center flex-col p-2 border max-w-[800px] rounded-md mx-auto">
        <h1 className="text-3xl text-gray-700 font-semibold pb-3 w-[90%] border-b border-blue-200 text-center m-5">
          Shipping Address
        </h1>
        <form className="w-full p-5 space-y-5">
          <div>
            <p className="text-md tracking-wide text-gray-600">First Name *</p>
            <input
              required
              type="text"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <div>
            <p className="text-md tracking-wide text-gray-600">Last Name *</p>
            <input
              required
              type="text"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <div>
            <p className="text-md tracking-wide text-gray-600">Middle Name *</p>
            <input
              required
              type="text"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <div>
            <p className="text-md tracking-wide text-gray-600">
              Street Address *
            </p>
            <input
              required
              type="text"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <div>
            <p className="text-md tracking-wide text-gray-600">
              Zip/Postal Code *
            </p>
            <input
              required
              type="text"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <div>
            <p className="text-md tracking-wide text-gray-600">
              Phone Number *
            </p>
            <input
              required
              type="text"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <div>
            <p className="text-md tracking-wide text-gray-600">Country</p>
            <select className="border p-2 outline-none rounded-md w-full">
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
          <div>
            <p className="text-md tracking-wide text-gray-600">State *</p>
            <select className="border p-2 outline-none rounded-md w-full">
              <option>Please select a State</option>
              <option className="capitalize">ABUJA FCT</option>
              <option>ABIA</option>
              <option>ADAMAWA</option>
              <option>AKWA IBOM</option>
              <option>ANAMBRA</option>
              <option>BAUCHI</option>
              <option>BAYELSA</option>
              <option>BENUE</option>
              <option>BORNO</option>
              <option>CROSS RIVER</option>
              <option>DELTA</option>
              <option>EBONYI</option>
              <option>EDO</option>
              <option>EKITI</option>
              <option>ENUGU</option>
              <option>GOMBE</option>
              <option>IMO</option>
              <option>JIGAWA</option>
              <option>KADUNA</option>
              <option>KANO</option>
              <option>KATSINA</option>
              <option>KEBBI</option>
              <option>KOGI</option>
              <option>KWARA</option>
              <option>LAGOS</option>
              <option>NASSARAWA</option>
              <option>NIGER</option>
              <option>OGUN</option>
              <option>ONDO</option>
              <option>OSUN</option>
              <option>OYO</option>
              <option>PLATEAU</option>
              <option>RIVERS</option>
              <option>SOKOTO</option>
              <option>TARABA</option>
              <option>YOBE</option>
              <option>ZAMFARA</option>
            </select>
          </div>
          <div>
            <p className="text-md tracking-wide text-gray-600">
              City *
            </p>
            <input
              required
              type="text"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <button className="p-2 text-white rounded-md bg-orange-600 block mx-auto font-semibold w-full hover:bg-white hover:text-black hover:border border-gray-700">Proceed to Checkout</button>
        </form>
      </div>
    </div>
  );
}
