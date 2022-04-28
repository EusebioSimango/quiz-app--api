echo 'ADDING NEW QUESTION'
CREATE=$(curl --silent -X POST --data-binary \
'{"question":"eu?", "a":"v", "b":"B", "c":3,"d":50, "rightAnswer":"b"}' \
 localhost:8080/questions/all)

echo CREATE

echo '\n\nAll question now'
curl localhost:8080/questions/all