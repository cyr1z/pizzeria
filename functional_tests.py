from selenium import webdriver
import unittest


class SeleniumTestCase(unittest.TestCase):
    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()


class HomePageTest(SeleniumTestCase):
    def test_home_page_works(self):
        self.browser.get('http://localhost:8000')
        self.assertIn('Django', self.browser.title)


if __name__ == '__main__':
    unittest.main(warnings='ignore')
