echo "\r\nCleaning expo level..."
expo r -c

echo "\r\nCleaning Android level..."
cd ./android
./gradlew clean
if [ "$1" == "--all" ]
then
    ./gradlew cleanBuildCache
fi
rm -rf build app/build
cd ..

echo "\r\nCleaning RN level..."
rm -rf node_modules
rm -rf yarn.lock
​
echo "\r\nCleaning iOS level..."
cd ./ios
rm -rf Pods
rm -rf build
rm Podfile.lock
if [ "$1" == "--all" ]
then
    pod cache clean --all
fi
pod deintegrate
pod repo update
pod setup
pod install
cd ..

if [ "$1" == "--all" ]
then
    echo "\r\nCleaning yarn level..."
    yarn cache clean --force
fi



echo "\r\nCleaning is finished"
