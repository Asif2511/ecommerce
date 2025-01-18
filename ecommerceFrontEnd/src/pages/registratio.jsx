
import { useForm } from "react-hook-form";

function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/customer/createcustomer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
               
                window.alert('Registration successful');
            } else if (response.status === 400) {
                
                window.alert('Registration failed');
            } else if (response.status === 409) {
               
                window.alert('Customer already exists');
            } else {
                
                window.alert('An unexpected error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert('Failed to connect to the server.');
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="mt-1 block w-full p-2 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email" },
          })}
          className="mt-1 block w-full p-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium">
          Address
        </label>
        <textarea
          id="address"
          {...register("address", { required: "Address is required" })}
          className="mt-1 block w-full p-2 border rounded-md"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
      </div>

      
      <div className="mb-4">
        <label htmlFor="phonenumber" className="block text-sm font-medium">
          Phone Number
        </label>
        <input
          id="phonenumber"
          type="text"
          {...register("phonenumber", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]{10}$/, message: "Must be 10 digits" },
          })}
          className="mt-1 block w-full p-2 border rounded-md"
        />
        {errors.phonenumber && (
          <p className="text-red-500 text-sm">{errors.phonenumber.message}</p>
        )}
      </div>

      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  </div>
</div>

    );
}

export default RegistrationForm;
