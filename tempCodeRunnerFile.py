import requests
import json
response = requests.get('https://somacap.com/api/trpc/companies.getCompaniesInfiniteQueryWithFilters?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22limit%22%3A30%2C%22industry%22%3Anull%2C%22region%22%3Anull%2C%22cursor%22%3Anull%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22cursor%22%3A%5B%22undefined%22%5D%7D%7D%7D%7D')

def fetch_all_data():
    response_data = response.json()
    
    all_data = []
    for item in response_data:
        if 'result' in item and 'data' in item['result'] and 'json' in item['result']['data'] and 'results' in item['result']['data']['json']:
            results = item['result']['data']['json']['results']
            for result in results:
                data = {
                    'id': result.get('id'),
                    'files': result.get('files'),
                    'sectors': result.get('sectors'),
                    'name': result.get('name'),
                    'logoUrl': result.get('logoUrl'),
                    'slug': result.get('slug'),
                    'oneLiner': result.get('oneLiner'),
                    'valuation': result.get('valuation'),
                    'region': result.get('region'),
                    'website': result.get('website')
                }
                all_data.append(data)
    return all_data

if __name__ == "__main__":
    all_data = fetch_all_data()
    print(all_data[1])
