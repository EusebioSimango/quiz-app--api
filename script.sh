echo 'ADDING NEW QUESTION'
CREATE=$(curl --silent -X POST --data-binary \
'{"question":"eu?","a":"A", "b":"B", "c":3,"d":50, "rightAnswer":"b"}' \
 localhost:3333/questions/all)

echo $CREATE

echo '\n\nAll question now'
curl -X GET localhost:3333/questions/all