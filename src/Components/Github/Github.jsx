import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // GitHub API endpoint for user details
        fetch('https://api.github.com/users/ayushkumarsingh14')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center m-4 text-xl">Loading...</div>;
    }

    if (error) {
        return <div className="text-center m-4 text-xl text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4">
            <p className="text-3xl">GitHub Followers: {data.followers}</p>
            <img src={data.avatar_url} alt="GitHub Avatar" width={300} className="mt-4 rounded-lg" />
        </div>
    );
}

export default Github;
