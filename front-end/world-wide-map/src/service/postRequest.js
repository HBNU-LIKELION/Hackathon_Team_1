export async function postRequest(data) {
    try {
        console.log(data.id);
        const apiUrl = `http://223.130.139.67:8000/Issue/visit/${data.id}/`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('POST 요청 실패');
        }

        const responseData = await response.json();
        console.log('POST 성공:', responseData);
        return responseData;
    } catch (error) {
        console.error('POST 실패:', error);
        throw error;
    }
}