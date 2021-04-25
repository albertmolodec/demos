# Add here all projects that need to be built
for project in vanilla-auth-form
do
  (cd ./public/projects/$project && npm install && npm run build)
done