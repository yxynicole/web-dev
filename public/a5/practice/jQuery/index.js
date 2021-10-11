
const init = () => {
    /* eslint-env jquery */
    /* do the rest of the work here */

    console.log('Hello world from jQuery');
    //bind to DOM
    const bindByld = $(`#bind-by-id`);
    const bindByClass = $(`.bind-by-class`);
    console.log(`Binding to DOM`);
    console.log(bindByld);
    console.log(bindByClass);

    //change style
    const changeStyle = $(`#change-style`);
    const changeStyle2 = $(`.change-style`);
    changeStyle.css("color", "red");
    changeStyle2.css("color", "blue");

    //get and set attributes
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr("id");
    console.log(id);

    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class','class-0');

    //add and remove classes
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');

    const removeClass1Example=$("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    //hiding and showing content
    const hideMe = $('#hide-me');
    hideMe.hide();

    const showMe = $(`show-me`);
    showMe.show();

    //creating new elements
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    //appending new elements
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    //removing and emptying content
    const removeThis = $('#remove-this');
    removeThis.remove();

    const emptyThis = $('#empty-this');
    emptyThis.empty();

    //changing content
    const changeThisText = $('#change-this-text');
    changeThisText.html("New Text");

    const changeThisHTML = $('#change-this-html');
    changeThisHTML.html(`
        <li>Line item A</li>
        <li>Line item B</li>
        <li>Line item C</li>
    `)

    const child2 = $("#child-2");
    const parent1 =
        child2.parents("#parent");
    parent1.css('background-color', 'red')
            .css('color', 'white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    //handling click events
    const handleClick = () => console.log("Handle click");
    const clickable = $('.clickable');
    clickable.click(handleClick);

    //event target
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    //hiding and showing content
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');

    const hideHandler = () => {
        hideShowHeader.hide();
    }

    const showHandler = () =>{
        hideShowHeader.show();
    }

    hideBtn.click(hideHandler);
    showBtn.click(showHandler);

    //end here
}
$(init);
