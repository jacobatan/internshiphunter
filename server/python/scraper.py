import requests
from bs4 import BeautifulSoup
import json

def main():
    #For AKL
    URL = "https://www.glassdoor.co.nz/Job/auckland-engineering-jobs-SRCH_IL.0,8_IC3525162_KO9,20.htm?jobType=internship"
    page = requests.get(URL)


    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="MainCol")

    job_elements = results.find_all("div")[0]
    job_elements = job_elements.find("ul")
    job_elements = job_elements.find_all( "li")

    info = []
    for ind,job_element in enumerate(job_elements):

        job_element = job_element.find_all("div")[1]

        spans = job_element.find_all("span")

        company = spans[0].text
        location = spans[-1].text
        name = spans[-2].text
        description = job_element.find_all("div")[-1].text
        link = "https://www.glassdoor.co.nz" + job_element.find("a")["href"]



        info.append( { "jobTitle": name,"jobDesc": description,"company": company,"link": link,"location": "Auckland" } )

    #For SYD
    URL = "https://www.glassdoor.co.nz/Job/sydney-jobs-SRCH_IL.0,6_IC2235932.htm?jobType=internship&sgocId=1007"
    page = requests.get(URL)


    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="MainCol")

    job_elements = results.find_all("div")[0]
    job_elements = job_elements.find("ul")
    job_elements = job_elements.find_all( "li")

    for ind,job_element in enumerate(job_elements):

        job_element = job_element.find_all("div")[1]

        spans = job_element.find_all("span")

        company = spans[0].text
        location = spans[-1].text
        name = spans[-2].text
        description = job_element.find_all("div")[-1].text
        link = "https://www.glassdoor.co.nz" + job_element.find("a")["href"]



        info.append( { "jobTitle": name,"jobDesc": description,"company": company,"link": link,"location": "Sydney" } )   
        
    #For HK
    URL = "https://www.glassdoor.co.nz/Job/hong-kong-engineering-jobs-SRCH_IL.0,9_IN106_KO10,21.htm?jobType=internship"
    page = requests.get(URL)


    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="MainCol")

    job_elements = results.find_all("div")[0]
    job_elements = job_elements.find("ul")
    job_elements = job_elements.find_all( "li")

    for ind,job_element in enumerate(job_elements):

        job_element = job_element.find_all("div")[1]

        spans = job_element.find_all("span")

        company = spans[0].text
        location = spans[-1].text
        name = spans[-2].text
        description = job_element.find_all("div")[-1].text
        link = "https://www.glassdoor.co.nz" + job_element.find("a")["href"]



        info.append( { "jobTitle": name,"jobDesc": description,"company": company,"link": link,"location": "Hong Kong" } )
        
    with open("info.json" , "w") as file:
                json.dump(info,file)

if __name__ == "__main__":
    main()






