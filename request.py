import requests
import json

def fetch_all_data():
    initUrl = 'https://somacap.com/api/trpc/companies.getCompaniesInfiniteQueryWithFilters?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22limit%22%3A30%2C%22industry%22%3Anull%2C%22region%22%3Anull%2C%22cursor%22%3Anull%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22cursor%22%3A%5B%22undefined%22%5D%7D%7D%7D%7D'

    response = requests.get(initUrl)
    response_data = response.json()
    all_data = []

    results = response_data[0]['result']['data']['json']['results']
    for item in results:
        data = {
            'id': item.get('id'),
            'files': item.get('files'),
            'sectors': item.get('sectors'),
            'name': item.get('name'),
            'logoUrl': item.get('logoUrl'),
            'slug': item.get('slug'),
            'oneLiner': item.get('oneLiner'),
            'valuation': item.get('valuation'),
            'region': item.get('region'),
            'website': item.get('website')
        }
        all_data.append(data)

    cursor = response_data[0]['result']['data']['json']['nextCursor']

    while True:
        nexturl = 'https://somacap.com/api/trpc/companies.getCompaniesInfiniteQueryWithFilters?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22limit%22%3A30%2C%22industry%22%3Anull%2C%22region%22%3Anull%2C%22cursor%22%3A%22' + cursor + '%22%7D%7D%7D'
    
        response = requests.get(nexturl)
        response_data = response.json()

        results = response_data[0]['result']['data']['json']['results']
        for item in results:
            data = {
                'id': item.get('id'),
                'files': item.get('files'),
                'sectors': item.get('sectors'),
                'name': item.get('name'),
                'logoUrl': item.get('logoUrl'),
                'slug': item.get('slug'),
                'oneLiner': item.get('oneLiner'),
                'valuation': item.get('valuation'),
                'region': item.get('region'),
                'website': item.get('website')
            }
            print(data)
            all_data.append(data)
        if response_data[0]['result']['data']['json']['nextCursor']:
            cursor = response_data[0]['result']['data']['json']['nextCursor']
        else:
            break
    
    return all_data


if __name__ == "__main__":
    all_data = fetch_all_data()
    if all_data:
        print(json.dumps(all_data[0], indent=4))
        print(len(all_data))
    else:
        print("No data found.")
