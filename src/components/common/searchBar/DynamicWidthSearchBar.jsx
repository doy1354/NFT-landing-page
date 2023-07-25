const searchImg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="search-normal-1 1">
        <path id="Vector" d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#757575" />
        <path id="Vector_2" d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#757575" />
    </g>
</svg>;

export default function DynamicWidthSearchBar() {
    // search functionality [how to search] with debounce technique
    function debounce(fn, delay) {
        let timeoutId;
        return function (e) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fn(e);
            }, delay);
        };
    }

    // search result
    const handleSearch = (e) => {
        console.log(e.target.value);
    };

    return (
        <form
            className="group | overflow-hidden relative | bg-neutral-100 text-neutral-900 | w-[50px] | border-2 border-solid border-neutral-400 rounded-full | flex justify-between | focus-within:w-[300px] focus-within:border-primary | transition-all duration-300 ease-[cubic-bezier(0.18,0.89,0.32,1.15)]"
        >
            <input
                onChange={debounce((e) => handleSearch(e), 1000)}
                type="text"
                aria-label="search"
                placeholder="Search"
                className="grow | w-full | pl-4 | cursor-pointer | bg-transparent | border-none outline-none | absolute top-0 bottom-0 left-0 leading-[46px] | opacity-0 | group-focus-within:opacity-100 group-focus-within:cursor-[initial] group-focus-within:w-[calc(100%-50px)] placeholder:text-neutral-500"
            />

            <button
                type="button"
                className="w-[50px] h-[46px] | grid place-content-center | ml-auto"
            >
                {searchImg}
            </button>
        </form>
    );
}
