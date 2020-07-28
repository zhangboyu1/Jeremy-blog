
class Tools {

    constructor() {

        this.setPage = {
            enter: (currentUrl) => {
                let currentUrl2 = currentUrl.slice(1);
                let currentElement = document.getElementById(currentUrl2);
                currentElement.style.animation = `enterPage 1s ease-in both`;
            },

            leave: (oldUrl) => {
                let oldUrl2 = oldUrl.slice(1);
                let oldElement = document.getElementById(oldUrl2);
                oldElement.style.animation = `leavePage 0.5s ease-in both`;
            },

            load: (homeUrl) => {
                let homeUrl2 = homeUrl.slice(1);
                let oldElement = document.getElementById(homeUrl2);
                oldElement.style.zIndex = `1008`;
            }

        }
    }

    setStyle = (ids, targetStyle, targetValue) => {
        for (let i = 0; i < ids.length; i++) {
            ids[i].style[targetStyle] = targetValue
        }
    }
}


//////////////////////////////////////////////
class router {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
        this.homeUrl = ``;
        this.oldUrl = ``;
        this.buffer = ``;
    }

    route(path, callback) {
        this.routes[path] = callback
    };

    load = () => {

        this.homeUrl = location.hash.slice(1) || '/';
        this.routes[this.homeUrl]();
        this.oldUrl = this.homeUrl;
        let homeElement = this.homeUrl.slice(1)


        if (homeElement === 'home' || homeElement === '') {
            window.tools.setStyle([service, resume, contact], `display`, `none`)
        }
        if (homeElement === 'resume') {
            window.tools.setStyle([service, home, contact], `display`, `none`)
        } if (homeElement === 'service') {
            window.tools.setStyle([resume, home, contact], `display`, `none`)
        } if (homeElement === 'contact') {
            window.tools.setStyle([resume, home, service], `display`, `none`)
        }
    }

    refresh = () => {

        this.currentUrl = location.hash.slice(1) || '/';
        let resume = document.getElementById(`resume`);
        let service = document.getElementById(`service`);
        let contact = document.getElementById(`contact`);
        const currentUrl = this.currentUrl.slice(1);

        if (this.oldUrl == `/`) {

            setTimeout(() => {

                document.getElementById(currentUrl).style.display = `flex`;
                window.tools.setPage.enter(this.currentUrl)

            }, 600)

            window.tools.setStyle([resume, contact, service], `display`, `none`)
            window.tools.setPage.leave(`/home`)

        } if (this.oldUrl == `/home`) {

            setTimeout(() => {
                document.getElementById(currentUrl).style.display = `flex`;
                window.tools.setPage.enter(this.currentUrl)
            }, 600)

            window.tools.setStyle([resume, contact, service], `display`, `none`)
            window.tools.setPage.leave(`/home`)

        } if (this.oldUrl == `/resume`) {


            setTimeout(() => {
                document.getElementById(currentUrl).style.display = `flex`;
                window.tools.setPage.enter(this.currentUrl)
            }, 600)

            window.tools.setStyle([home, contact, service], `display`, `none`)
            window.tools.setPage.leave(this.oldUrl)

        }
        if (this.oldUrl == `/service`) {

            setTimeout(() => {
                document.getElementById(currentUrl).style.display = `flex`;
                window.tools.setPage.enter(this.currentUrl)

            }, 600)

            window.tools.setStyle([home, contact, resume], `display`, `none`)
            window.tools.setPage.leave(this.oldUrl)

        }
        if (this.oldUrl == `/contact`) {

            setTimeout(() => {
                document.getElementById(currentUrl).style.display = `flex`;
                window.tools.setPage.enter(this.currentUrl)

            }, 600)

            window.tools.setStyle([home, service, resume], `display`, `none`)
            window.tools.setPage.leave(this.oldUrl)
        }
        this.buffer = this.oldUrl;
        this.oldUrl = this.currentUrl;
    }

    init() {
        const home = location.hash.slice(1) || `/`
        if (home != '/') {

            document.getElementById(home.slice(1)).style.zIndex = 1020;
        }
        window.addEventListener('load', this.load.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }

}

// Handle Router///
// window.setDisplay = new setDisplay();
window.Router = new router();
window.Router.init();

Router.route('/', () => {

    let homeElement = document.getElementById(`home`);

    homeElement.style.display = `flex`;

});


Router.route('/home', () => {

    setTimeout(() => {

        window.tools.setPage.enter(Router.currentUrl)
    }, 600)

});


Router.route('/resume', function () {

    if (Router.homeUrl === `/resume`) {

        window.tools.setPage.load(Router.homeUrl)

    } else {

        setTimeout(() => {

            window.tools.setPage.enter(Router.currentUrl)

        }, 600);

    }

});


Router.route('/service', function () {

    if (Router.homeUrl === `/service`) {


        window.tools.setPage.load(Router.homeUrl)


    } else {

        setTimeout(() => {

            window.tools.setPage.enter(Router.currentUrl)


        }, 600);

    }

});


Router.route('/contact', function () {

    if (Router.homeUrl === `/contact`) {


        window.tools.setPage.load(Router.homeUrl)


    } else {

        setTimeout(() => {

            window.tools.setPage.enter(Router.currentUrl)
        }, 600);

    }

});



////////////////////////////Control button part /////////////////////////

class Click {

    click = () => {

        const wholeInput = document.getElementsByClassName("wholeInput");
        const errorTextList = document.getElementsByClassName("errorText");


        if (event.target.className === `middle navItem`) {


            if (event.target.childNodes[1].tagName != `A`) {


                const AllnodeList = document.getElementsByClassName(event.target.childNodes[1].className)

                const AllnodeList_2 = document.getElementsByClassName(`navList`)


                for (let i = 0; i < AllnodeList.length; i++) {

                    if (event.target.childNodes[1].id === AllnodeList[i].id) {

                        event.target.childNodes[1].style.display = `block`;
                        AllnodeList_2[i].style.marginTop = `-4px`;
                        AllnodeList_2[i].style.color = "purple";
                        const dynamicBarList = document.getElementsByClassName(`dynamicBar`)

                        if (AllnodeList[i].id === `resumeNav`) {

                            // const lala = window.getComputedStyle(resumeNav,`::after` )

                            // console.log(lala);

                            for (let j = 0; j < dynamicBarList.length; j++) {


                                dynamicBarList[j].style.display = `block`;

                                setTimeout(() => {
                                    dynamicBarList[j].style.transition = `width 2s ease-in-out`;

                                    dynamicBarList[j].style.width = `70%`;

                                }, 1000)
                            }
                        } else {


                            for (let j = 0; j < dynamicBarList.length; j++) {

                                dynamicBarList[j].style.display = `none`;
                                dynamicBarList[j].style.width = `0rem`;
                            }


                        } if (AllnodeList[i].id != `contactNav`) {

                            console.log(`我不是contact Nav`)

                            for (let i = 0; i < wholeInput.length; i++) {

                                wholeInput[i].style.border = `1px solid lightgrey`
                                errorTextList[i].style.display = `none`;
                                errorTextList[i].style.width = `150`;
                            }
                        }

                    } else {

                        AllnodeList[i].style.display = 'none';
                        AllnodeList[i].style.display = 'none';
                        AllnodeList[i].style.display = 'none';
                        AllnodeList_2[i].style.marginTop = `0px`;
                        AllnodeList_2[i].style.color = `lightGray`;
                    }

                }

            }
        }
        return 1
    }

    init() {

        window.addEventListener('click', this.click.bind(this), false);
    }
}

///////////////////////////Scroll Function ====>Header/////////////////////////////


class Scroll {

    handleOnScroll = () => {
        const scrollPosition = window.scrollY;

        console.log(scrollPosition)

        if (scrollPosition > 18) {

            document.getElementById(`container`).childNodes[1].className = `header sticker`
        } if (!scrollPosition) {

            document.getElementById(`container`).childNodes[1].className = `header`
        }
    }

    init() {

        window.addEventListener('scroll', this.handleOnScroll.bind(this), false);
    }
}


//////////////////////////////////////Input Function////////////////////////////////////

class Input {

    constructor() {

        this.data = { "name": ``, "email": ``, "message": `` };
    }

    handleInputChange = () => {

        const inputTagList = document.getElementsByTagName("input");
        const reminderList = document.getElementsByClassName("reminder");

        for (let i = 0; i < inputTagList.length - 1; i++) {

            if (inputTagList[i].value != ``) {

                reminderList[i].style.display = `none`;
                reminderList[i].style.width = `130px`;

            }
        }
    }

    handleFocus = () => {

        const inputTagList = document.getElementsByTagName("input");
        const reminderList = document.getElementsByClassName("reminder");
        const errorTextList = document.getElementsByClassName("errorText");
        const wholeInput = document.getElementsByClassName("wholeInput");
        // 然后给每一个tag都赋予一个onclick functino。
        for (let i = 0; i < inputTagList.length - 1; i++) {
            inputTagList[i].onclick = function () {
                // alert(this.value);
                if (this.value === ``) {

                    reminderList[i].style.display = `block`;
                    setTimeout(() => {
                        reminderList[i].style.width = `300px`;

                    }, 1000)

                    errorTextList[i].style.display = `none`;
                    errorTextList[i].style.width = `150`;
                    wholeInput[i].style.border = `1px solid purple`

                } else {
                    reminderList[i].style.display = `none`;
                    reminderList[i].style.width = `130px`;
                }
            }

            inputTagList[i].onblur = function () {

                if (this.value === ``) {

                    reminderList[i].style.display = `none`;
                    reminderList[i].style.width = `130px`;

                    errorTextList[i].style.display = `block`;
                    errorTextList[i].style.width = `300px`;

                    wholeInput[i].style.border = `1px solid red`

                } else {

                    wholeInput[i].style.border = `1px solid lightgrey`

                }
            }
        }
    }

    handlePost = () => {

        // 来先获取最后的那个input button...
        const submit = document.getElementById(`submit`);
        const inputTagList = document.getElementsByTagName("input");
        submit.onclick = () => {

            for (let i = 0; i < inputTagList.length - 1; i++) {

                if (i === 0) {
                    this.data.name = inputTagList[i].value
                } if (i === 1) {

                    this.data.email = inputTagList[i].value
                } if (i === 2) {

                    this.data.message = inputTagList[i].value
                }
            }

            const xhttp = new XMLHttpRequest();
            // There is a need to solve the cors issue ...

            const apiLink = `http://localhost:8010/submit`

            console.log(apiLink)

            let postData = JSON.stringify(this.data)

            xhttp.open("post", apiLink);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.send(postData);

            xhttp.onload = function () {
                let responseText = xhttp.responseText;
                console.log(responseText);
            };

            xhttp.onerror = function () {
                console.log('There was an error!');
            };


        }
    }


    init = () => {

        window.addEventListener('input', this.handleInputChange.bind(this), false);

    }
}


window.tools = new Tools();
//Handle click event
window.click = new Click();
window.click.init();

//Handle scroll event
window.scroll = new Scroll();
window.scroll.init();

// Handle Input event
window.input = new Input();
window.input.init();
window.input.handleFocus();
window.input.handlePost();
