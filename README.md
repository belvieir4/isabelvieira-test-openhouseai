# OpenHouse.AI - Front End Web Development Coding Exercise

Submission by Isabel Vieira / [@belvieir4](https://github.com/belvieir4)

**Stack used** - Next.js / Typescript / Tailwind / React Query / Axios

---

### Available scripts

#### npm install

Execute this script to install the dependencies

#### npm run dev

Execute this script to run the application locally on development mode

#### npm build

Execute this script to build the project and prepare it to run it on production mode

#### npm start

Execute this script to run the application on production mode (build required)

---

### Overview

I've started the project using React insted of Next.js, but when I got to the part of consuming the API, **I started receiving a CORS error**, so I've searched the internet for a workaround, as I didn't know if I would have a quick response from OpenHouse.ai about a fix.

The workaround made me move my project to **Next.js where I could use API Routes** to get the information needed from the API. Even though I've never used Next.js before, I was able to make it work.

For the UI, I've decided to use **Tailwind CSS** to help, as it's a robust framework that uses tokens that guarantee the design consistency and responsiveness.

And **Axios and React Query** where the libraries that I chose to help with the API consumption.

### Follow up questions

**Q: How would you improve the quality of your application?**
A: If possible there are some things I'd do:

- Add tests to guarantee the quality and helps prevent software regression
- Map and improve errors that I couldn't foresee
- Create a lazy loading visualization to support a larger number of results without compromizing performance

**Q: Would you implement anything differently?**
A: Yes. If there wasn't the CORS error, I'd stick with the React project that I have more knowledge of, and, while reading about Next.js, I realized that the library might be too much for a simple project like this.

### Next steps and conclusion

Thinking on next steps for this project, I'd create a listing with all the houses available on each community, and a details page in each one of them, so the user can see all the information they need about the house.

It was a challanging test, specially because I had to find alternatives to deliver it in time and deal with a unexpect problem.
