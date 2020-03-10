class Blog {
	constructor() {
		//const dataURL = "https://tlhm20eugk.execute-api.ap-northeast-2.amazonaws.com/prod/lambda_get_blog_info";
        const dataURL = "/data/data.json";
        this.setInitVariables();
        this.registerEvents();
        this.setInitData(dataURL);
        this.likedSet = new Set();
        
    }	

    setInitVariables() {
		this.blogList = document.querySelector(".blogList > ul");
	}

    registerEvents(){
        const startBtn = document.querySelector(".start");
        const dataURL = "/data/data.json";
        const blogList = document.querySelector(".blogList > ul");

        startBtn.addEventListener("click", () => {
            this.setInitData(dataURL);
        });

        this.blogList.addEventListener("click", ({target}) => {
            const targetClassName = target.className; 
            //className === like => 찜하기 내 찜목록에 새로운 블로그 제목을 추가한다? 
            const postTitle = target.previousElementSibling.textContent;

            if(targetClassName !== "like" && targetClassName !== "unlike") return;
   
            //찜취소로 클릭하면 찜하기로 벼ㄴ경하고 찜목록 제거하고 찜목록뷰를 랜더링한다.
			if(targetClassName === "unlike") {
				target.className = "like";
				target.innerText = "찜하기";
				this.likedSet.delete(postTitle);
			} else {
				target.className = "unlike";
				target.innerText = "찜취소";
				this.likedSet.add(postTitle);
            }

            //내 찜목록 vue에 추가
            this.updateLikedList();

            //dispatcher.emit("change_like_list", {'titile':this.likedSer});
        });
    }

    updateLikedList(){
        const ul = document.querySelector(".like-list > ul");
        let likedSum = "";

        //li태그에 찜 리스트를 넣고 한 번에 innerHTML을 사용한다
        this.likedSet.forEach ( (v) => {
			likedSum += `<li> ${v} </li>`;
		})
		ul.innerHTML = likedSum;
    }

	setInitData(dataURL) {
		this.getData(dataURL, this.insertPosts.bind(this));
	}

	getData(dataURL, fn) {
		const oReq = new XMLHttpRequest();
		oReq.addEventListener("load", () => {
			//const list = JSON.parse(JSON.parse(oReq.responseText).body);
			const list = JSON.parse(oReq.responseText).body;
            fn(list);
		});
		oReq.open('GET', dataURL);
		oReq.send();
	}

	insertPosts(list) { //블로그 리스트  ul에 innerHTML로 넣어주려고

		list.forEach((v) => {
            this.blogList.innerHTML += `
            <li> 
                <a href=${v.link}> ${v.title}</a>
                <div class="like">찜하기</div>
            </li>`;
		})
	}
}

export default Blog;