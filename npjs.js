{/* <script> */}

        function book(sno, title, author, q) {
            this.sno = sno;
            this.title = title;
            this.author = author;
            this.q = q;
        }

        function display(b) {
            let tb = document.getElementById("tbody");
            let s = `<tr>
                        <th scope="row">${b.sno}</th>
                        <td>${b.title}</td>
                        <td>${b.author}</td>
                        <td>${b.q}<td>
                    </tr>`;
            console.log(b);
            if(b.sno==1)
            tb.innerHTML=s;
            else
            tb.innerHTML += s;
        }

        function fun() {

            document.getElementById("tbody").innerHTML = `<tr>
                        <th scope="row">-></th>
                        <td><b>....<b></td>
                        <td>Loading in 4seconds</td>
                        <td><b>.....<b><td>
                    </tr>`;
            let s = document.getElementById("search").value;
            fetch("http://openlibrary.org/search.json?q=" + s)
                .then(a => a.json())
                .then(response => {
                    for (var i = 0; i < response.docs.length; i++) {
                        let no = i + 1;
                        let t = "NO title";
                        let aut = "NO author";
                        let x = Math.floor((Math.random() * 10) + 1);
                        let qu = x;

                        if (response.docs[i].title != "")
                            t = response.docs[i].title;

                        if ((response.docs[i].author_name).length > 0)
                            aut = response.docs[i].author_name[0];

                        let b = new book(no, t, aut, qu);
                        display(b);
                        console.log(b);
                    }
                });

        }

        function rec() {
            document.getElementById("tbody").innerHTML = `<tr>
                        <th scope="row">-></th>
                        <td>....</td>
                        <td>Loading in 15seconds</td>
                        <td>.....<td>
                    </tr>`;
            let s = "novel";
            fetch("http://openlibrary.org/search.json?q=" + s)
                .then(a => a.json())
                .then(response => {
                    for (var i = 0; i < response.docs.length; i++) {
                        let no = i + 1;
                        let t = "NO title";
                        let aut = "NO author";
                        let x = Math.floor((Math.random() * 10) + 1);
                        let qu = x;

                        if (response.docs[i].title != "")
                            t = response.docs[i].title;

                        if ((response.docs[i].author_name).length > 0)
                            aut = response.docs[i].author_name[0];

                        let b = new book(no, t, aut, qu);
                        display(b);
                        console.log(b);
                    }
                });
        }


    {/* </script> */}