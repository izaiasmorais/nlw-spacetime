import fastify from "fastify";

const app = fastify();

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("🚀 Http server runing on http://locahost:3333");
	});
