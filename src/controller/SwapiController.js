import BASE_URL_API from "@/api/baseURL";

const getPeopleSW = async (page) => {
    try {
        if(page == null ) page = 1
        const res = await fetch(BASE_URL_API + "people"+"/?page="+page, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        return data
    } catch (err) {
        return err
    }

}


export {
    getPeopleSW
}
