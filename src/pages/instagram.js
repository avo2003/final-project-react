import React, { useState, useEffect } from 'react';

import instagramApi from '../apis/instagramApi';

export default function Instagram({ match }) {
	const [insta, setInsta] = useState({});

    const instagramid = match.params.id;
    useEffect(() => {
        const getInsta = async () => {
            const response = await instagramApi.get(`/api/instagrams/${instagramid}`);
            setInsta(response.data);
        };
        getInsta();
    }, [instagramid]);

	return (
		<div className='ui container'>
			<div className='ui segments'>
				<div className='ui segment'>
					<img className='ui centered image' src={insta.avatar} alt='arten xosacel enq...' />
				</div>
                <div  className="a1">
	<div  className="c2">
 
		<img  className="avatar" src={insta.avatar}  alt="avatar"/>
		<h3> {insta.name} {insta.username}</h3>
	</div>
  

<img  className="a2" src={insta.img1}  alt="avatar"/>
<img  className="a2" src={insta.img2}  alt="avatar"/>
<img  className="a2" src={insta.img3}  alt="avatar"/>
<img  className="a2" src={insta.img4}  alt="avatar"/>
<img  className="a2" src={insta.img5}  alt="avatar"/>
</div>
				<div className='ui secondary segment'>
					
					
				</div>
			</div>
		</div>
	);
}

