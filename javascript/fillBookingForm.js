window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const from = params.get("from");
    const to = params.get("to");

    if (from && to) {
        document.querySelector("#from").value = from;
        document.querySelector("#to").value = to;
    }
});
