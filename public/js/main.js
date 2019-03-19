const app = new Vue({
  el: "#app",
  data: {
    url: "",
    shortened_url: "",
    error: ""
  },
  methods: {
    shortenUrl: function(e) {
      e.preventDefault();
      fetch("/api/shortener", {
        method: "POST",
        body: JSON.stringify({ url: this.url }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          if (response.error) {
            this.error = response.error;
            this.shortened_url = "";
          } else {
            this.shortened_url = `${window.location.origin}/${
              response.shortened_code
            }`;
            this.error = "";
          }
        });
    }
  }
});
