

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')
    //
    // please note that element.innerText is not supported,
    // you can use element.textContent instead.
    const tag = document.getElementsByTagName("Q").textContent;
    return tag
}