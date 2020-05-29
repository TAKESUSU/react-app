import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
            <ul>
                {
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) =>
                            <li key={index}>
                                <p>『{x.volumeInfo.title}』</p>
                                <p>{x.volumeInfo.authors}</p>
                                <img src={x.volumeInfo.imageLinks?.smallThumbnail} />
                            </li>
                        )
                }
            </ul>
        </div>
    );
}
export default Booklist;