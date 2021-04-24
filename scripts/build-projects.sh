# Add to the array new buildable projects
for project in vanilla-auth-form
do
  (cd ./public/projects/$project && npm install && npm run build)
done