export const togglePanel = ({ target }) => {
    target.classList.toggle('expanded');
    let content = target.nextElementSibling;

    if (content.style.height) {
        content.style.height = null;
        content.style.margin = '0px';
    } else {
        content.style.height = `${content.scrollHeight + 16}px`;
        content.style.margin = '0 1rem 1rem';
    }
};
