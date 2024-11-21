import React from 'react';

const Forgot = () => {
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100">  
        <div class="bg-white shadow-md rounded p-8 max-w-sm w-full">  
            <h2 class="text-lg font-semibold mb-5">Reset Password</h2>  
            <form>  
                <label class="block mb-2 text-sm font-medium text-gray-600" for="email">Enter your email address to receive a password reset link.</label>  
                <input type="email" id="email" name="email" class="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />  
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send Reset Link</button>  
            </form>  
        </div>  
    </div>  
    );
};

export default Forgot;








