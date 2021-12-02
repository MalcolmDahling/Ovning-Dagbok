let LS = JSON.parse( localStorage.getItem('posts') );
let posts = [];

if(LS){
    posts = LS;
}


document.getElementById('save').addEventListener('click', function(){
    posts.push( {'headline':document.getElementById('headline').value, 'text':document.getElementById('text').value, 'date':document.getElementById('date').value} );
    console.log(posts);

    localStorage.setItem( 'posts', JSON.stringify(posts) );


    //remove all posts then recreate them including the new post.
    document.querySelectorAll('.post').forEach(function(element){
        element.remove()
    });

    listPosts();

});





function listPosts(){
    posts.forEach(function(element, index){ //element = posts[i]
        document.body.insertAdjacentHTML('beforeend', `
            <div class="post">
                <h2>`+element.headline+`</h2>
                <p>`+element.text+`</p>
                <p>Posted on: `+element.date+`</p>
            </div>
        `);
    });
}

listPosts();