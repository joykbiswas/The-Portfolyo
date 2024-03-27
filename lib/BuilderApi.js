
// export const userData = async () =>{
//     const {data} = await get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
//     console.log(data);
//     return data;
// }
export const userData = async () => {
    try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        console.log(data); // This line will log the data
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};